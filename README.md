# Remote Fancy Button Component

A beautiful, reusable React button component with ripple effects and hover animations, built for remote loading via ESM.

## Features

- 🎨 Gradient background
- ✨ Ripple effect on click
- 🔄 Smooth hover animations
- 📱 Responsive design
- 🎯 TypeScript support
- 🔌 Easy remote loading

## Usage

You can load this component remotely in your React application using:

```jsx
// Using SystemJS
const url = 'https://cdn.jsdelivr.net/gh/codehippie1/esm-components@main/dist/remote-fancy-button.es.js';

// Example loader component
const RemoteButtonLoader = ({ url, ...props }) => {
  const [RemoteButton, setRemoteButton] = useState(null);

  useEffect(() => {
    System.import(url).then((module) => {
      setRemoteButton(() => module.default);
    });
  }, [url]);

  if (!RemoteButton) return <div>Loading...</div>;
  return <RemoteButton {...props} />;
};
```

## Props

- `children`: React node (button text/content)
- `onClick`: Function to handle click events
- `className`: Additional CSS classes
- `...props`: All other standard button props are supported

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## License

MIT 