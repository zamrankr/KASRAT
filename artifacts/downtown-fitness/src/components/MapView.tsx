export default function MapView() {
  return (
    <div className="w-full h-full min-h-[400px] flex flex-col gap-2">
      <iframe
        title="KASRAT Valencia Town"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13605!2d74.2605108!3d31.4084589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901a6840a8f2d%3A0x19b1f13a77cff37d!2sKASRAT!5e0!3m2!1sen!2s!4v1"
        className="w-full rounded-xl"
        style={{ border: 0, height: '50%', minHeight: '200px' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        sandbox="allow-scripts allow-same-origin allow-popups"
      />
      <iframe
        title="KASRAT Lake City"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13605!2d74.2479375!3d31.3539375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919ab8206727fb1%3A0xdd5bd79617f4667b!2sKASRAT!5e0!3m2!1sen!2s!4v1"
        className="w-full rounded-xl"
        style={{ border: 0, height: '50%', minHeight: '200px' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        sandbox="allow-scripts allow-same-origin allow-popups"
      />
    </div>
  );
}
