interface Contact {
  icon: "map-marker" | "message";
  text: string;
}

interface FooterContactsProps {
  contacts: Contact[];
}

export default function FooterContacts({ contacts }: FooterContactsProps) {
  return (
      <footer className="bg-red-600 text-white py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
          {contacts.map((contact, idx) => (
            <div key={idx} className="flex items-center">
              {contact.icon === "map-marker" ? (
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 2H4C2.9 2 2 2.9 2 4v16l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                </svg>
              )}
              <span>{contact.text}</span>
            </div>
          ))}
        </div>
      </footer>
  );
}
