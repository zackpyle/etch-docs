---
title: Dynamic Data in Loops
sidebar_position: 30
---

# Dynamic Data in Loops

Loops are powerful tools in Etch that allow you to display multiple items from your WordPress data sources in a structured, repeatable format. They're essential for creating dynamic lists, grids, and galleries of content.

## What Are Loops?

Loops are containers that automatically display multiple items from your data sources. Instead of manually creating individual cards or sections for each piece of content, loops automatically generate them based on your data.

Think of loops as "smart containers" that know how to display multiple items using the same structure and styling. They're perfect for creating:
- Service listings
- Blog post grids
- Product catalogs
- Team member galleries
- Portfolio showcases
- Testimonial carousels

## How Loops Work

### 1. **Data Source Selection**
You choose which WordPress data source to pull from (posts, custom post types, custom fields, etc.).

### 2. **Loop Configuration**
You configure how many items to display, sorting options, and filtering criteria.

### 3. **Template Assignment**
You assign a component or template to define how each item should be displayed.

### 4. **Automatic Generation**
The loop automatically generates the specified number of items using your template.

## Loop Examples

### **Service Listing Loop**
Display all services in a grid format:

- **Data Source**: Services custom post type
- **Display Count**: 6 services per row
- **Template**: Service card component
- **Sorting**: Alphabetical by service name
- **Pagination**: Show 12 services per page

### **Blog Post Loop**
Show recent blog posts:

- **Data Source**: Blog posts
- **Display Count**: 3 posts per row
- **Template**: Blog post card component
- **Sorting**: Most recent first
- **Filtering**: Only published posts

### **Team Member Loop**
Display team members:

- **Data Source**: Team custom post type
- **Display Count**: 4 members per row
- **Template**: Team member card component
- **Sorting**: By position/role
- **Filtering**: Only active team members

## Benefits of Loops

### **Automatic Content Generation**
Add new content in WordPress and it automatically appears in your loops. No manual updates required.

### **Consistent Styling**
All items in a loop follow the same design and structure, ensuring visual consistency.

### **Scalability**
Loops automatically handle any number of items, from a few to hundreds.

### **Performance**
Loops are optimized for performance, loading content efficiently and implementing pagination when needed.

### **Flexibility**
Easily change display options, sorting, and filtering without touching individual items.

## Creating Loops in Etch

### **Step 1: Add Loop Container**
1. In Etch, add a loop container to your page
2. Choose your data source (posts, custom post types, etc.)
3. Configure basic loop settings

### **Step 2: Configure Loop Settings**
1. Set the number of items to display
2. Choose sorting options (date, title, custom fields)
3. Set up filtering criteria
4. Configure pagination settings

### **Step 3: Assign Template**
1. Choose a component or template for item display
2. Map dynamic fields to your data source
3. Set up any conditional logic

### **Step 4: Style and Test**
1. Apply styling to your loop
2. Test with various data scenarios
3. Verify responsive behavior

## Loop Best Practices

### **Choose Appropriate Data Sources**
Select data sources that contain the type of content you want to display in your loop.

### **Use Efficient Templates**
Create lightweight, focused templates for loop items to ensure fast loading.

### **Implement Pagination**
For large datasets, use pagination to improve performance and user experience.

### **Add Filtering Options**
Provide users with ways to filter and sort loop content when appropriate.

### **Optimize for Mobile**
Ensure your loops display well on all device sizes.

### **Test with Real Data**
Always test your loops with actual WordPress content to ensure proper functionality.

## Advanced Loop Features

### **Conditional Display**
Show or hide items based on specific criteria or data availability.

### **Dynamic Sorting**
Allow users to sort loop content by different criteria.

### **Search Integration**
Add search functionality to filter loop content.

### **Lazy Loading**
Implement lazy loading for better performance with large datasets.

### **Custom Styling**
Apply different styles to loop items based on content or position.

## Next Steps

Now that you understand loops, learn how to create and configure them in Etch, and explore advanced features like custom filtering and dynamic sorting.
