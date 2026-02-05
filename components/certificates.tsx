import { Award, ExternalLink } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: 'ChatGPT Made Easy: AI Essentials for Beginners',
      issuer: 'Udemy',
      date: 'Aug 2025',
      credentialId: 'UC-83462fe9-c83c-498c-8ea3-8d4925935ad9',
      image: '/certificates/ChatGPT Made Easy AI Essentials for Beginners.png',
    },
    {
      id: 2,
      title: 'Master Generative AI & Generative AI Tools (ChatGPT & more)',
      issuer: 'Udemy',
      date: 'Aug 2025',
      credentialId: 'UC-3b4134aa-8ff7-4b89-aff4-b685cb788bf4',
      image: '/certificates/Master Generative AI & Generative AI tools (ChatGPT & more).png',
    },
    {
      id: 3,
      title: 'Build Generative AI Apps and Solutions with No-Code Tools',
      issuer: 'Udemy',
      date: 'Aug 2025',
      credentialId: 'UC-39fffb77-2be4-4e9a-bc37-e588a43d10db',
      image: '/certificates/Build Generative AI Apps and Solutions with No-Code Tools.png',
    },
    {
      id: 4,
      title: 'Computational Theory: Language Principle & Finite Automata Theory',
      issuer: 'Infosys Wingspan',
      date: 'Aug 2025',
      credentialId: '',
      image: '/certificates/Computational Theory Language Principle & Finite Automata Theory.jpg',
    },
    {
      id: 5,
      title: 'Fundamentals of Network Communication',
      issuer: 'University of Colorado',
      date: 'Oct 2024',
      credentialId: '5WT7LJ0WCYJE',
      image: '/certificates/Fundamentals of Network Communication.jpg',
    },
    {
      id: 6,
      title: 'Digital Systems: From Logic Gates to Processors',
      issuer: 'Universitat Autònoma de Barcelona',
      date: 'Sep 2024',
      credentialId: 'USUBR30LOQS8',
      image: '/certificates/Digital Systems From Logic Gates to Processors.jpg',
    },
    {
      id: 7,
      title: 'Introduction to Hardware and Operating Systems',
      issuer: 'IBM',
      date: 'Sep 2024',
      credentialId: 'X1082WTN3WA2',
      image: '/certificates/Introduction to Hardware and Operating Systems.jpg',
    },
    {
      id: 8,
      title: 'Google – The Bits and Bytes of Computer Networking',
      issuer: 'Google',
      date: 'Sep 2024',
      credentialId: 'D7XYZALC8ZWS',
      image: '/certificates/Google – The Bits and Bytes of Computer Networking.jpg',
    },
    {
      id: 9,
      title: 'Object Oriented Programming',
      issuer: 'iamneo - An NIIT Venture',
      date: 'Dec 2024',
      credentialId: '',
      image: '/certificates/Object Oriented Programming.png',
    },
    {
      id: 10,
      title: 'Java Programming',
      issuer: 'iamneo - An NIIT Venture',
      date: 'Dec 2024',
      credentialId: '',
      image: '/certificates/Java Programming.png',
    },
    {
      id: 11,
      title: 'Data Structure and Algorithm',
      issuer: 'iamneo - An NIIT Venture',
      date: 'Dec 2024',
      credentialId: '',
      image: '/certificates/Data Structure and Algorithm.png',
    },
  ];

  return (
    <section id="certificates" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-12">Certificates & Credentials</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Award className="text-accent" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-primary mb-1">{cert.title}</h3>
                  <p className="text-accent font-medium text-sm mb-2">{cert.issuer}</p>
                  <div className="flex flex-col gap-2">
                    <p className="text-muted-foreground text-sm">
                      <span className="font-medium">Issued:</span> {cert.date}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <span className="font-medium">ID:</span> {cert.credentialId}
                    </p>
                    {cert.image && (
                      <a
                        href={cert.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-2 text-accent hover:text-accent/80 transition-colors font-medium text-sm"
                      >
                        <ExternalLink size={16} />
                        View Certificate Photo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-accent/5 border border-accent/20 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-primary mb-4">Professional Development</h3>
          <ul className="space-y-3 text-foreground">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">→</span>
              <span>Continuously learning and staying updated with latest technologies and industry best practices</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">→</span>
              <span>Active participant in webinars, workshops, and technical conferences</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">→</span>
              <span>Contributing to open source projects and sharing knowledge through technical writing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">→</span>
              <span>Mentoring junior developers and conducting code reviews in collaborative environments</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
