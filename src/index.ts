// Import Express from the node_modules.
import Express from 'express'
import { Response, Request } from 'express' // Import the right response and request

// Create a new Express instance
const app = Express()

// Set the port that this app will run on
const PORT = 3000

// Create a simple GET route that will return a simple "hello world!" text using Express.
app.get('/', (req: Request, res: Response) => {
  res.send("Hello world") // Send simple hello world
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});