
export const config = {
  runtime: 'edge',
};

interface MaintenanceRequest {
  unitNumber: string;
  residentName: string;
  contactEmail: string;
  issueType: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'emergency';
  timestamp: string;
}

export default async function handler(request: Request) {
  // Only allow POST requests
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    // Parse the JSON body
    const data = await request.json() as MaintenanceRequest;
    
    // Validate required fields
    if (!data.unitNumber || !data.residentName || !data.description || !data.issueType) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // In a real implementation, you would store this in a database 
    // and potentially trigger notifications
    console.log('Received maintenance request:', data);

    // For demo purposes, we're just returning success
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Maintenance request received',
        ticketId: `MR-${Date.now().toString().slice(-6)}`,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing maintenance request:', error);
    return new Response(JSON.stringify({ error: 'Failed to process request' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
