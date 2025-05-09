
# Strata Management API Functions

This directory contains serverless edge functions for the Strata Management platform.

## Available Endpoints

### 1. Maintenance Request API
**Endpoint:** `/api/maintenance`  
**Function:** `receive-maintenance-request.js`  
**Method:** POST  
**Purpose:** Allows residents to submit maintenance requests for their units.

**Example Request:**
```json
{
  "unitNumber": "12B",
  "residentName": "John Smith",
  "contactEmail": "john@example.com",
  "issueType": "plumbing",
  "description": "Leaking faucet in master bathroom",
  "priority": "medium",
  "timestamp": "2023-05-15T14:30:00Z"
}
```

### 2. Meeting Notification API
**Endpoint:** `/api/notify`  
**Function:** `send-meeting-notification.js`  
**Method:** POST  
**Purpose:** Sends notifications about upcoming strata meetings to residents.

**Example Request:**
```json
{
  "meetingType": "committee",
  "date": "2023-06-10",
  "time": "19:00",
  "location": "Building Community Room",
  "agenda": [
    "Annual budget review",
    "Parking lot maintenance",
    "Lobby renovation proposal"
  ],
  "recipients": ["all"]
}
```

### 3. Resident QR Code Generator API
**Endpoint:** `/api/resident-qr`  
**Function:** `generate-resident-qr.js`  
**Methods:** GET or POST  
**Purpose:** Generates unique QR codes for residents to access amenities and common areas.

**Example POST Request:**
```json
{
  "unitNumber": "15A",
  "residentName": "Emma Wilson",
  "residentId": "RES-15A-001",
  "validUntil": "2023-12-31"
}
```

**Example GET Request:**
```
/api/resident-qr?unitNumber=15A&residentName=Emma%20Wilson&residentId=RES-15A-001&validUntil=2023-12-31
```
