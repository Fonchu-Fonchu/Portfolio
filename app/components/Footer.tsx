"use client"

export default function Footer() {
    return (
      <footer id="contact" className="bg-gray-900 py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4"> &copy; 2023 My Portfolio. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          </div>
        </div>
      </footer>
    );
  }