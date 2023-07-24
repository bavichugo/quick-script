# Reusable Layout Component (keeping footer where it belongs)

General structure of a responsive layout using Tailwind

```js
<html className="bg-black" lang="en">
  <body className="flex flex-col min-h-screen">
    <div className=''>
      <Navbar1 />
      <main className='bg-black container mx-auto'>
        {children}
      </main>
    </div>
    <Footer1 />
  </body>
</html>
```

- Keeping footer where it belongs:
--   To keep the footer where it belongs, we need this element: `<body className="flex flex-col min-h-screen">`. This element is extremely important as it makes the body fill the entire screen height, pushing the footer below. However, `min-h-screen` does not do the trick alone. To make the footer stick to the right place, we need to add mt-auto to the outermost footer element.
