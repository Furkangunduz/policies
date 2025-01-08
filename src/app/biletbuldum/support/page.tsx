const SupportPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Biletbuldum Support
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We're here to help you with any questions or issues you may have.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {/* Contact Information */}
          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>Email:</strong>{' '}
                <a href="mailto:furkan.gundz00@gmail.com" className="text-blue-600 hover:text-blue-800">
                  furkan.gundz00@gmail.com
                </a>
              </p>
              <p className="text-gray-600">
                <strong>Response Time:</strong> We typically respond within 24 hours during business days.
              </p>
            </div>
          </section>

          {/* Common Issues */}
          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Common Topics</h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Account Management</li>
              <li>• Technical Support</li>
              <li>• App Features</li>
            </ul>
          </section>

        </div>

        <footer className="mt-12 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Biletbuldum. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default SupportPage; 