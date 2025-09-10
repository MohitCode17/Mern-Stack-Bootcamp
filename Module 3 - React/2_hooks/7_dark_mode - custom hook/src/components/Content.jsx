const Content = () => {
  return (
    <div className="p-6 text-gray-900 dark:text-gray-100">
      <h2 className="text-2xl font-bold mb-4">Welcome to Dark Mode App</h2>
      <p className="mb-3">
        This is a real-world example of how we can create a reusable custom hook
        to handle persistent dark mode across the app.
      </p>
      <p>
        Your theme preference is saved in <b>localStorage</b>, so when you
        reload the page, your theme remains intact! 🎉
      </p>
    </div>
  );
};

export default Content;
