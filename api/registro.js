/**
 * Vercel Serverless Function - Cafecito Tech Registration
 * Handles form submissions and creates contacts in Go High Level
 */

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
    const { firstName, lastName, email, phone, perfil } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // GHL Configuration
    const GHL_API_KEY = process.env.GHL_LINK_FOUNDATION_API_KEY;
    const GHL_LOCATION_ID = process.env.GHL_LINK_FOUNDATION_LOCATION_ID || '16si1rBnP02ZCR1Igv3o';

    if (!GHL_API_KEY) {
      console.error('GHL API Key not configured');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Build contact payload
    const contactPayload = {
      firstName,
      lastName,
      email,
      locationId: GHL_LOCATION_ID,
      tags: ['cafecito-tech', 'evento-marzo-2026', 'lead-source-landing'],
      source: 'Cafecito Tech Landing'
    };

    // Add phone if provided
    if (phone) {
      contactPayload.phone = phone;
    }

    // Add custom field for profile if provided
    if (perfil) {
      contactPayload.customFields = [
        { key: 'perfil_cafecito', field_value: perfil }
      ];
    }

    // Create contact in GHL
    const ghlResponse = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Version': '2021-07-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactPayload)
    });

    const ghlData = await ghlResponse.json();

    if (!ghlResponse.ok) {
      console.error('GHL Error:', ghlData);
      
      // Check if it's a duplicate contact (already registered)
      if (ghlData.message?.includes('duplicate') || ghlData.message?.includes('already exists')) {
        return res.status(200).json({ 
          success: true, 
          message: 'Already registered',
          contactId: ghlData.contactId 
        });
      }
      
      return res.status(500).json({ error: 'Failed to create contact' });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Registration successful',
      contactId: ghlData.contact?.id 
    });

  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
