---
title: Dynamic Data in Templates
sidebar_position: 20
---

# Templates & Dynamic Data

Templates are the foundation of dynamic content management in Etch. They allow you to create reusable layouts that automatically populate with content from your WordPress data sources.

## What Are Templates?

Templates are special page layouts that define how dynamic content should be structured and displayed. Instead of creating individual pages for each piece of content (like individual service pages, blog posts, or product pages), you create one template that automatically generates pages for all your content.

Think of templates as "molds" that define the structure, styling, and layout of your content pages. When you connect a template to a data source, Etch automatically creates pages for each item in that data source using your template as the blueprint.

## How Templates Work

### 1. **Template Creation**
You create a template page in Etch that defines the layout and structure you want for your dynamic content.

### 2. **Data Source Connection**
You connect your template to a WordPress data source (posts, custom post types, custom fields, etc.).

### 3. **Automatic Page Generation**
Etch automatically generates individual pages for each item in your data source, using your template as the foundation.

### 4. **Dynamic Content Population**
The template automatically pulls and displays the appropriate content for each generated page.

## Template Examples

### **Service Page Template**
Instead of creating individual pages for each service, create one template:

- **Header**: Service title (dynamically pulled from WordPress)
- **Hero Section**: Service description and featured image
- **Content Area**: Detailed service information
- **Related Services**: Loop showing other services
- **Contact Form**: Standard contact form

When you add a new service in WordPress, a new page is automatically created using this template.

### **Blog Post Template**
Create one template for all blog posts:

- **Title**: Post title (from WordPress)
- **Meta**: Author, date, categories (from WordPress)
- **Featured Image**: Post featured image
- **Content**: Post content
- **Related Posts**: Loop showing other posts
- **Comments**: WordPress comments section

### **Product Page Template**
One template for all products:

- **Product Images**: Gallery from WordPress
- **Product Title**: Product name
- **Price**: Product pricing
- **Description**: Product details
- **Add to Cart**: WooCommerce integration
- **Related Products**: Product recommendations

## Benefits of Templates

### **Scalability**
Add new content in WordPress and pages are automatically created. No development work required.

### **Consistency**
All pages follow the same structure and styling, ensuring brand consistency.

### **Maintainability**
Update the template once and all pages using it are automatically updated.

### **Performance**
Templates are optimized for performance, loading only the necessary content for each page.

### **SEO Benefits**
Automatically generated pages are properly structured for search engines.

## Creating Templates in Etch

### **Step 1: Create Template Page**
1. In Etch, create a new page
2. Design your layout using components and dynamic data fields
3. Save the page as a template

### **Step 2: Connect Data Source**
1. Select your template page
2. Choose the WordPress data source (posts, custom post types, etc.)
3. Map your template fields to WordPress data

### **Step 3: Configure Settings**
1. Set URL structure for generated pages
2. Configure SEO settings
3. Set up any additional integrations

### **Step 4: Test and Deploy**
1. Test with sample content
2. Verify all dynamic fields are working
3. Deploy your template

## Template Best Practices

### **Plan Your Structure**
Before creating a template, plan out what content you need and how it should be organized.

### **Use Components**
Break your template into reusable components for better organization and maintainability.

### **Test with Real Data**
Always test your templates with actual WordPress content to ensure everything works correctly.

### **Optimize for Performance**
Use efficient queries and caching strategies to ensure fast page loading.

### **Consider SEO**
Structure your templates with proper heading hierarchy and meta data for better search engine optimization.

## Next Steps

Now that you understand templates, learn how to create and configure them in Etch, and explore advanced template features like conditional logic and custom field integration.
