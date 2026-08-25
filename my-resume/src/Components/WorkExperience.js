export const WorkExperience = () => {
  return (
    <div>
      <section className="mb-6">
        <h2 className="text-2xl font-bold border-b-2 border-black pb-1">
          EXPERIENCES
        </h2>

        {/* Housie | Software Engineer */}
        <div className="mt-4">
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">Housie | Software Engineer</h3>
            <p className="text-sm">Feb '26 - Present</p>
          </div>
          <ul className="list-disc mt-2 pl-5 text-justify space-y-1">
            <li>
              Independently built Housie Hub from scratch, a core internal operations application across iOS and Android using React Native and Ruby on Rails, taking complete end-to-end ownership from build to deployment on App Store and Play Store.
            </li>
            <li>
              Engineered vital operational workflows including real-time order processing, automated packer allocation, and rider tracking modules to streamline order fulfillment and boost overall business efficiency.
            </li>
          </ul>
        </div>

        {/* Cital | Software Engineer */}
        <div className="mt-4">
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">Cital | Software Engineer</h3>
            <p className="text-sm">Feb '25 - Feb '26</p>
          </div>
          <ul className="list-disc mt-2 pl-5 text-justify space-y-1">
            <li>
              Migrated the legacy web app to a native mobile app using React Native, and implemented map functionality, push notifications, OTP autofill, and Truecaller login.
            </li>
            <li>
              Optimised SiteMan, a photo sharing and attendance tracking app, and reduced attendance marking time by nearly 70%.
            </li>
            <li>
              Built robust backend API endpoints and database solutions while optimizing frontend component rendering and app load speed for enhanced user experience across devices.
            </li>
          </ul>
        </div>

        {/* Linkedingage | Web Designer */}
        <div className="mt-4">
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">
              Linkedingage | Web Designer
            </h3>
            <p className="text-sm">Dec '23 - Feb '24</p>
          </div>
          <ul className="list-disc mt-2 pl-5 text-justify space-y-1">
            <li>
              Designed and developed well-structured, semantic, and responsive website layouts using HTML5, CSS3, and JavaScript best practices.
            </li>
            <li>
              Optimized website load performance, search engine visibility (SEO), and cross-browser accessibility, iteratively refining design based on analytics insights.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
