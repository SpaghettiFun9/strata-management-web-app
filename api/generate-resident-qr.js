
export const config = {
  runtime: 'edge',
};

/**
 * @typedef {Object} ResidentQRRequest
 * @property {string} unitNumber
 * @property {string} residentName
 * @property {string} residentId
 * @property {string} [validUntil] - Optional expiration date
 */

/**
 * @param {Request} request
 */
export default async function handler(request) {
  // Allow both GET and POST methods
  if (request.method !== 'GET' && request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    /** @type {ResidentQRRequest} */
    let data;
    
    if (request.method === 'POST') {
      // For POST, extract data from request body
      data = await request.json();
    } else {
      // For GET, extract data from URL parameters
      const url = new URL(request.url);
      data = {
        unitNumber: url.searchParams.get('unitNumber') || '',
        residentName: url.searchParams.get('residentName') || '',
        residentId: url.searchParams.get('residentId') || '',
        validUntil: url.searchParams.get('validUntil') || undefined,
      };
    }
    
    // Validate required fields
    if (!data.unitNumber || !data.residentName || !data.residentId) {
      return new Response(JSON.stringify({ error: 'Missing required resident information' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Create a payload for the QR code
    // In a production system, this should be encrypted and/or digitally signed
    const qrPayload = {
      u: data.unitNumber, // Unit number
      r: data.residentId, // Resident ID
      n: data.residentName, // Resident name
      t: Date.now(), // Timestamp of creation
      e: data.validUntil ? new Date(data.validUntil).getTime() : undefined, // Expiration
    };
    
    // In a real implementation:
    // 1. Generate an actual QR code image using a library
    // 2. Create a secure, signed JWT token to prevent tampering
    
    // For this demo, we'll just return the QR payload that would be encoded
    const qrData = Buffer.from(JSON.stringify(qrPayload)).toString('base64');
    
    return new Response(
      JSON.stringify({
        success: true,
        message: 'QR code data generated successfully',
        qrCodeData: qrData,
        imageUrl: `/api/qr-image?data=${encodeURIComponent(qrData)}`, // This would point to another API that generates the actual image
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error generating resident QR code:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate QR code' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
