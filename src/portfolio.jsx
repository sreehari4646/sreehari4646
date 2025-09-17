export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Sreehari K</h1>
          <p className="text-lg text-gray-600">Product Support Engineer | Cybersecurity | SaaS Support</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="mailto:sreeharikn18@gmail.com" className="flex items-center space-x-1 text-blue-600">
              <p>Email</p>
            </a>
            <a href="https://www.linkedin.com/in/sreehari-k-480046196" target="_blank" className="flex items-center space-x-1 text-blue-600">
              <p>LinkedIn</p>
            </a>
          </div>
        </header>

        {/* About */}
        <div className="shadow-md rounded-2xl">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-3">About Me</h2>
            <p>
              I’m a Product Support Engineer with 2+ years of experience in SaaS product support, cybersecurity tools, and enterprise systems. 
              I specialize in troubleshooting, vulnerability scanning, API analysis, and automation scripting. I’m available for freelance and contract roles, bringing reliability, quick problem-solving, and client-focused support.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="shadow-md rounded-2xl">
          <div className="p-6 space-y-2">
            <h2 className="text-2xl font-semibold mb-3">Services Offered</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Technical & Product Support (SaaS, Cybersecurity, Cloud Tools)</li>
              <li>Vulnerability Scanning & API Troubleshooting</li>
              <li>Knowledge Base & Help Guide Creation</li>
              <li>Pre-Sales & Customer Success Support</li>
              <li>System Monitoring & Database Support (MySQL, Oracle, MS SQL)</li>
            </ul>
          </div>
        </div>

        {/* Experience */}
        <div className="shadow-md rounded-2xl">
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold mb-3">Experience</h2>
            <div>
              <h3 className="font-bold">Astra Security – Product Support Engineer II</h3>
              <p className="text-sm text-gray-600">Feb 2023 – Present | Remote / Bengaluru</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provided Tier 1 & Tier 2 support for global SaaS customers.</li>
                <li>Configured and monitored automated vulnerability scans, improving accuracy.</li>
                <li>Created troubleshooting guides, FAQs, and technical documentation.</li>
                <li>Collaborated with engineering and sales teams for issue resolution and client demos.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">SAP (External – Fidelis) – System Engineer</h3>
              <p className="text-sm text-gray-600">Mar 2022 – Feb 2023 | Bengaluru</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Supported enterprise clients with system monitoring and troubleshooting.</li>
                <li>Worked on performance analysis and database support (MS SQL, Oracle).</li>
                <li>Resolved incidents using ticketing tools, ensuring SLA compliance.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="shadow-md rounded-2xl">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-3">Tools & Skills</h2>
            <p>
              Jira, Confluence, Puppeteer, Chrome DevTools, Astra Security Platform, Google Workspace, Slack, MS Teams, MySQL, Oracle, MS SQL, Windows, Linux, JavaScript (basic scripting), Python (basic scripting).
            </p>
          </div>
        </div>

        {/* Placeholder for Case Studies */}
        <div className="shadow-md rounded-2xl border-dashed border-2 border-gray-300">
          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold mb-3">Case Studies & Samples</h2>
            <p className="text-gray-600">Coming soon: real client projects, help articles, and troubleshooting workflows.</p>
          </div>
        </div>

        {/* Contact */}
        <div className="shadow-md rounded-2xl bg-blue-600 text-white">
          <div className="p-6 text-center space-y-3">
            <h2 className="text-2xl font-semibold">Let’s Work Together</h2>
            <p>Available for remote freelance and contract-based technical support roles.</p>
            <a href="mailto:sreeharikn18@gmail.com"><button>Get in Touch</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}