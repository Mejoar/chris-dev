import mongoose from 'mongoose';
import { Blog } from '../models/blog.model.js';
import { User } from '../models/user.model.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from parent directory
dotenv.config({ path: path.join(__dirname, '../../.env') });

const sampleTechBlogs = [
  {
    title: "Getting Started with React 18: New Features and Best Practices",
    subtitle: "Explore the latest features in React 18 and how to implement them in your projects",
    description: `
      <h2>Introduction to React 18</h2>
      <p>React 18 introduces several groundbreaking features that enhance performance and user experience. In this comprehensive guide, we'll explore the most important updates including Concurrent Features, Automatic Batching, and the new Suspense improvements.</p>
      
      <h3>Concurrent Features</h3>
      <p>The biggest addition in React 18 is concurrent rendering, which allows React to prepare multiple versions of your UI at the same time. This means React can interrupt a long-running render to handle a more urgent update.</p>
      
      <pre><code>
// Using startTransition for non-urgent updates
import { startTransition } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (value) => {
    setQuery(value); // Urgent update
    startTransition(() => {
      setResults(searchData(value)); // Non-urgent update
    });
  };
}
      </code></pre>

      <h3>Automatic Batching</h3>
      <p>React 18 automatically batches multiple state updates into a single re-render for better performance, even in promises, timeouts, and native event handlers.</p>

      <h3>Suspense Improvements</h3>
      <p>Suspense now works seamlessly with server-side rendering and has better support for code splitting and data fetching.</p>

      <p>These features make React applications more responsive and provide better user experiences. Start experimenting with these features in your next project!</p>
    `,
    category: "React",
    isPublished: true,
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
  },
  {
    title: "Building RESTful APIs with Node.js and Express: Complete Guide",
    subtitle: "Learn how to create robust and scalable REST APIs using Node.js and Express framework",
    description: `
      <h2>Introduction to REST API Development</h2>
      <p>REST (Representational State Transfer) is an architectural style for designing networked applications. In this guide, we'll build a complete REST API using Node.js and Express.</p>
      
      <h3>Setting Up the Project</h3>
      <p>First, let's initialize our Node.js project and install the necessary dependencies:</p>
      
      <pre><code>
npm init -y
npm install express mongoose cors helmet morgan
npm install -D nodemon
      </code></pre>

      <h3>Creating the Express Server</h3>
      <pre><code>
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
      </code></pre>

      <h3>Best Practices</h3>
      <ul>
        <li>Use proper HTTP status codes</li>
        <li>Implement input validation</li>
        <li>Add rate limiting</li>
        <li>Use environment variables for configuration</li>
        <li>Implement proper error handling</li>
      </ul>

      <p>Following these practices will help you build maintainable and secure APIs that can handle production workloads.</p>
    `,
    category: "Node.js",
    isPublished: true,
    thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop"
  },
  {
    title: "CSS Grid vs Flexbox: When to Use Which Layout Method",
    subtitle: "Understanding the differences between CSS Grid and Flexbox and choosing the right tool for your layout needs",
    description: `
      <h2>Understanding Modern CSS Layout</h2>
      <p>CSS Grid and Flexbox are both powerful layout systems, but they serve different purposes. Let's explore when to use each one effectively.</p>
      
      <h3>CSS Flexbox: One-Dimensional Layouts</h3>
      <p>Flexbox is designed for one-dimensional layouts - either rows or columns. It's perfect for:</p>
      <ul>
        <li>Navigation bars</li>
        <li>Centering content</li>
        <li>Distributing space between items</li>
        <li>Card layouts in a single row/column</li>
      </ul>

      <pre><code>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}
      </code></pre>

      <h3>CSS Grid: Two-Dimensional Layouts</h3>
      <p>CSS Grid excels at two-dimensional layouts where you need to control both rows and columns simultaneously:</p>

      <pre><code>
.dashboard {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 250px 1fr 1fr;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
      </code></pre>

      <h3>Can They Work Together?</h3>
      <p>Absolutely! You can use Grid for the overall page structure and Flexbox for component layouts within grid areas.</p>

      <p>Understanding both tools and their strengths will make you a more versatile frontend developer!</p>
    `,
    category: "CSS",
    isPublished: true,
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
  }
];

const seedTechBlogs = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Find the first user to assign as author
    const user = await User.findOne();
    if (!user) {
      console.log('No users found. Please create a user first.');
      return;
    }

    // Delete existing blogs (optional)
    await Blog.deleteMany({});
    console.log('Cleared existing blogs');

    // Add author to each blog
    const blogsWithAuthor = sampleTechBlogs.map(blog => ({
      ...blog,
      author: user._id
    }));

    // Insert sample blogs
    const result = await Blog.insertMany(blogsWithAuthor);
    console.log(`Successfully seeded ${result.length} tech blogs`);

    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding blogs:', error);
    mongoose.connection.close();
  }
};

// Run the seeder
seedTechBlogs();
