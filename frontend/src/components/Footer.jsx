const Footer = () => {
  return (
    <div className="bg-[#0E0704] h-auto p-10 text-white">
      <ul className="grid lg:grid-cols-3 gap-2 justify-center items-center text-center">
        <li>
          <p className="name-logo font-bold tracking-wide">
            Mary Grace Basilio
          </p>
        </li>
        <li>
          <p className="normal-t tracking-wide text-orange-50/40 text-xs">
            &copy; 2026 - All Rights Reserved
          </p>
        </li>
        <li className="normal-t flex gap-3 tracking-wide text-orange-50/40 text-xs">
          <a href="">LinkedIn</a>
          <a href="">GitHub</a>
          <a href="">Telegram</a>
          <a href="">Whatsapp</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
