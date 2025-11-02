export default function Footer() {
  return (
    <footer className="mt-auto py-6">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Waste Classifier. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">About Us</a>
          <a className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}