# Reusable Layout Component (keeping footer where it belongs)

General structure of a responsive layout using Tailwind

```js
<html lang="en">
  <body className="flex flex-col h-full min-h-screen">
    <div className='flex flex-col h-full'>
      <Navbar1 />
      <main className='container mx-auto h-full'>
        {children}
      </main>
    </div>
    <Footer1 />
  </body>
</html>
```

- Keeping footer where it belongs:
  - To keep the footer where it belongs, we need this element: `<body className="flex flex-col h-full min-h-screen">`. This element is extremely important as it makes the body fill the entire screen height, pushing the footer below. However, `min-h-screen` does not do the trick alone. To make the footer stick to the right place, we need to add mt-auto to the outermost footer element.
  - NOTE: do not add h-full to `<html>`. The problem is that once the content needs more space, it will go over the header and footer.
