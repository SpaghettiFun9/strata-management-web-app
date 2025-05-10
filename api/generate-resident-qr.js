
export const config = {
  runtime: 'edge',
};

/**
 * @typedef {Object} ResidentQRRequest
 * @property {string} unitNumber - The unit number of the resident
 * @property {string} residentName - The name of the resident
 * @property {string} residentId - Unique identifier for the resident
 * @property {string} [validUntil] - Optional expiry date for the QR code
 */

/**
 * @param {Request} request
 * @returns {Promise<Response>}
 */
export default async function handler(request) {
  // Handle both GET and POST methods
  const method = request.method;
  let data = {};
  
  if (method === 'GET') {
    // Parse URL parameters for GET requests
    const url = new URL(request.url);
    data = {
      unitNumber: url.searchParams.get('unitNumber'),
      residentName: url.searchParams.get('residentName'),
      residentId: url.searchParams.get('residentId'),
      validUntil: url.searchParams.get('validUntil')
    };
  } else if (method === 'POST') {
    // Parse JSON body for POST requests
    try {
      data = await request.json();
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Invalid JSON payload' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } else {
    // Return method not allowed for other HTTP methods
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  // Validate required fields
  if (!data.unitNumber || !data.residentName || !data.residentId) {
    return new Response(JSON.stringify({ error: 'Missing required resident information' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  // In a real implementation, you would:
  // 1. Generate a unique QR code (e.g., using a library like qrcode)
  // 2. Encode resident data and access permissions
  // 3. Store QR code reference in database
  // 4. Return image data or a URL to the QR code
  
  // For demo purposes, return a mock response
  const qrId = `QR-${Date.now().toString().slice(-6)}`;
  const expiryDate = data.validUntil || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  
  return new Response(
    JSON.stringify({
      success: true,
      qrId: qrId,
      residentId: data.residentId,
      unitNumber: data.unitNumber,
      validUntil: expiryDate,
      qrImageUrl: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
        JSON.stringify({
          id: qrId,
          resident: data.residentName,
          unit: data.unitNumber,
          expires: expiryDate
        })
      )}`
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  );
}
