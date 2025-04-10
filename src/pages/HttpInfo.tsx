
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const HttpInfo = () => {
  // HTTP Methods
  const httpMethods = [
    { name: "GET", description: "Retrieves data from the server. Data is sent as URL parameters.", useCases: "Fetching data, search queries" },
    { name: "POST", description: "Sends data to the server in the request body. Used for submitting forms.", useCases: "Form submissions, file uploads" },
    { name: "PUT", description: "Updates an entire resource on the server.", useCases: "Replacing an entire document" },
    { name: "PATCH", description: "Partially updates a resource on the server.", useCases: "Updating specific fields" },
    { name: "DELETE", description: "Removes a resource from the server.", useCases: "Deleting records" }
  ];

  // HTTP Status Codes
  const statusCodes = [
    { code: "1xx", description: "Informational", examples: "100 Continue, 101 Switching Protocols" },
    { code: "2xx", description: "Success", examples: "200 OK, 201 Created, 204 No Content" },
    { code: "3xx", description: "Redirection", examples: "301 Moved Permanently, 302 Found, 304 Not Modified" },
    { code: "4xx", description: "Client Error", examples: "400 Bad Request, 401 Unauthorized, 404 Not Found" },
    { code: "5xx", description: "Server Error", examples: "500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable" }
  ];

  // Redirect Code Sample
  const redirectCodeSample = `
  export async function handler(req, res) {
    // Check if redirect is needed
    if (someCondition) {
      // Redirect with 302 Found status code
      return res.status(302).redirect('/new-location');
    }
    
    // Or with 301 Permanent redirect
    return res.status(301).redirect('/permanent-new-location');
  }
  `;

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">HTTP Concepts</h1>
          <p className="text-muted-foreground mt-2">
            Understanding HTTP methods, status codes, and redirects
          </p>
        </div>

        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Educational Content</AlertTitle>
          <AlertDescription>
            This page provides educational information about HTTP concepts for the strata management application.
          </AlertDescription>
        </Alert>
        
        <Card>
          <CardHeader>
            <CardTitle>HTTP Methods: GET vs POST</CardTitle>
            <CardDescription>Understanding the difference between HTTP request methods</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                HTTP methods define the action to be performed on a resource. The two most common methods used in web forms are GET and POST.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">GET Requests</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Data is sent as URL parameters</li>
                    <li>Parameters visible in address bar</li>
                    <li>Can be bookmarked</li>
                    <li>Has size limitations (~2K)</li>
                    <li>Data is not secure (visible in URL)</li>
                    <li>Cacheable and can be stored in browser history</li>
                    <li>Used for retrieving data only</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold">POST Requests</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Data is sent in the request body</li>
                    <li>Parameters not visible in address bar</li>
                    <li>Cannot be bookmarked</li>
                    <li>No size limitations</li>
                    <li>More secure (data not visible in URL)</li>
                    <li>Not cacheable by default</li>
                    <li>Used for submitting data to be processed</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div>
              <h3 className="font-semibold mb-4">Common HTTP Methods</h3>
              <Table>
                <TableCaption>Main HTTP methods and their uses</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Method</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="hidden md:table-cell">Common Use Cases</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {httpMethods.map((method) => (
                    <TableRow key={method.name}>
                      <TableCell className="font-medium">{method.name}</TableCell>
                      <TableCell>{method.description}</TableCell>
                      <TableCell className="hidden md:table-cell">{method.useCases}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>HTTP Status Codes</CardTitle>
            <CardDescription>Understanding server responses through status codes</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              HTTP status codes are three-digit numbers that indicate the result of an HTTP request. They are grouped into five classes:
            </p>
            
            <Table>
              <TableCaption>HTTP status code categories</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Range</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Common Examples</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {statusCodes.map((status) => (
                  <TableRow key={status.code}>
                    <TableCell className="font-medium">{status.code}</TableCell>
                    <TableCell>{status.description}</TableCell>
                    <TableCell>{status.examples}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>HTTP Redirects</CardTitle>
            <CardDescription>Understanding and implementing redirects in serverless functions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                Redirects are a way to send users from one URL to another. They're commonly used when pages move, for authentication flows, or to maintain clean URLs.
              </p>
              
              <div className="space-y-2">
                <h3 className="font-semibold">Common Redirect Status Codes:</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong>301 Moved Permanently</strong>: The requested resource has been permanently moved to a new URL</li>
                  <li><strong>302 Found</strong>: The requested resource temporarily resides under a different URL</li>
                  <li><strong>303 See Other</strong>: The response to the request can be found at another URI using a GET method</li>
                  <li><strong>307 Temporary Redirect</strong>: The request should be repeated with the same method at the new URL</li>
                  <li><strong>308 Permanent Redirect</strong>: Like 301, but the request method and body should not be changed</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold">Implementing Redirects in a Serverless Function:</h3>
                <div className="bg-gray-950 text-gray-50 p-4 rounded-md overflow-x-auto">
                  <pre><code>{redirectCodeSample}</code></pre>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold">When to Use Different Redirect Types:</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong>301 Redirects</strong>: Use when content has permanently moved and for SEO benefit</li>
                  <li><strong>302 Redirects</strong>: Use for temporary redirects, like during maintenance</li>
                  <li><strong>Client-side Redirects</strong>: Use for redirects after form submissions or authentication</li>
                  <li><strong>Server-side Redirects</strong>: Use when you need to verify conditions before redirecting</li>
                </ul>
              </div>
              
              <Alert className="bg-primary/10 border-primary/20">
                <AlertTitle>Implementation Note</AlertTitle>
                <AlertDescription>
                  For serverless functions in a strata management application, you might use redirects for:
                  <ul className="list-disc pl-5 mt-2">
                    <li>Redirecting after a maintenance request is submitted</li>
                    <li>Authentication flows for committee member access</li>
                    <li>Confirmation pages after form submissions</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default HttpInfo;
