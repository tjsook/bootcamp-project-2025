# MongoDB Setup Guide for Portfolio Projects

## Option 1: Using MongoDB Compass (GUI - Recommended for Beginners)

### Step 1: Open MongoDB Compass

1. Launch MongoDB Compass application
2. Connect to your MongoDB instance (usually `mongodb://localhost:27017`)

### Step 2: Create Database

1. Click "Create Database" button
2. Database Name: `BlogDB` (or whatever you named it)
3. Collection Name: `projects`
4. Click "Create Database"

### Step 3: Add Project Documents

1. Select the `BlogDB` database from the left sidebar
2. Select the `projects` collection
3. Click "ADD DATA" → "Insert Document"
4. Switch to JSON view and paste the following example documents:

#### Example Project 1:

```json
{
  "title": "Personal Website",
  "slug": "personal-website",
  "description": "My first project programmed in HTML, CSS, and JS. Utilized hack4impact's starter pack to learn fundamentals of HTML and CSS.",
  "image": "/img1.jpg",
  "image_alt": "Screenshot of personal website",
  "link": "https://tjsook.github.io",
  "github": "https://github.com/tjsook/tjsook.github.io",
  "technologies": ["HTML", "CSS", "JavaScript"]
}
```

#### Example Project 2:

```json
{
  "title": "Object Detection using CNNs",
  "slug": "object-detection-cnn",
  "description": "A machine learning project that uses Convolutional Neural Networks to detect and classify objects in images. Built with TensorFlow and Python.",
  "image": "/img2.jpg",
  "image_alt": "Object detection demo",
  "link": "https://github.com/tjsook/object-detection",
  "github": "https://github.com/tjsook/object-detection",
  "technologies": ["Python", "TensorFlow", "OpenCV", "NumPy"]
}
```

#### Example Project 3:

```json
{
  "title": "Design Portfolio",
  "slug": "design-portfolio",
  "description": "A collection of my graphic design work including logos, posters, and UI/UX mockups created with Adobe Creative Suite.",
  "image": "/img3.jpg",
  "image_alt": "Design portfolio showcase",
  "technologies": ["Adobe Photoshop", "Adobe Illustrator", "Figma"]
}
```

5. Click "Insert" for each document

---

## Option 2: Using MongoDB Shell (mongosh)

### Step 1: Open MongoDB Shell

```bash
mongosh
```

### Step 2: Switch to Database

```javascript
use BlogDB
```

### Step 3: Insert Projects

```javascript
db.projects.insertMany([
  {
    title: "Personal Website",
    slug: "personal-website",
    description:
      "My first project programmed in HTML, CSS, and JS. Utilized hack4impact's starter pack to learn fundamentals of HTML and CSS.",
    image: "/img1.jpg",
    image_alt: "Screenshot of personal website",
    link: "https://tjsook.github.io",
    github: "https://github.com/tjsook/tjsook.github.io",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Object Detection using CNNs",
    slug: "object-detection-cnn",
    description:
      "A machine learning project that uses Convolutional Neural Networks to detect and classify objects in images. Built with TensorFlow and Python.",
    image: "/img2.jpg",
    image_alt: "Object detection demo",
    link: "https://github.com/tjsook/object-detection",
    github: "https://github.com/tjsook/object-detection",
    technologies: ["Python", "TensorFlow", "OpenCV", "NumPy"],
  },
  {
    title: "Design Portfolio",
    slug: "design-portfolio",
    description:
      "A collection of my graphic design work including logos, posters, and UI/UX mockups created with Adobe Creative Suite.",
    image: "/img3.jpg",
    image_alt: "Design portfolio showcase",
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma"],
  },
]);
```

### Step 4: Verify Insertion

```javascript
db.projects.find().pretty();
```

---

## Option 3: Using MongoDB Atlas (Cloud)

### Step 1: Log into MongoDB Atlas

1. Go to https://cloud.mongodb.com
2. Log in to your account
3. Select your cluster

### Step 2: Browse Collections

1. Click "Collections" button
2. Select your database (e.g., `BlogDB`)
3. Click "Create Collection" if `projects` doesn't exist
4. Name it: `projects`

### Step 3: Insert Documents

1. Click "INSERT DOCUMENT"
2. Paste the JSON examples from above
3. Click "Insert"
4. Repeat for each project

---

## Project Schema Fields Reference

### Required Fields:

- **title** (string): Project name
- **slug** (string): URL-friendly identifier (must be unique)
- **description** (string): Project description
- **image** (string): Path to project image (e.g., "/img1.jpg")
- **image_alt** or **imageAlt** (string): Alt text for image

### Optional Fields:

- **link** (string): URL to live project
- **github** (string): URL to GitHub repository
- **technologies** (array of strings): Technologies used

---

## Important Notes:

1. **Image Paths**:

   - Use paths like `/img1.jpg` that point to files in your `public` folder
   - Or use full URLs for external images

2. **Slug Format**:

   - Should be URL-friendly (lowercase, hyphens instead of spaces)
   - Must be unique for each project
   - Examples: "personal-website", "object-detection-cnn"

3. **Collection Name**:

   - Must be exactly `projects` (lowercase)
   - The schema in `projectSchema.ts` is configured for this name

4. **Field Naming**:
   - MongoDB uses `image_alt` (with underscore)
   - TypeScript/React uses `imageAlt` (camelCase)
   - The schema handles the conversion automatically

---

## Verification

After adding projects, test by:

1. Starting your dev server:

   ```bash
   npm run dev
   ```

2. Navigate to: `http://localhost:3000/portfolio`

3. You should see all your projects listed!

---

## Troubleshooting

**If projects don't appear:**

- Check MongoDB connection string in `.env.local`
- Verify database name matches in connection string
- Verify collection is named `projects` (lowercase)
- Check browser console for errors
- Check terminal for server errors

**If images don't load:**

- Ensure images are in the `public` folder
- Use paths starting with `/` (e.g., `/img1.jpg`)
- Check image file names match exactly (case-sensitive)
