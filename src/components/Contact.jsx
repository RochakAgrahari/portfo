const Contact = () => (
    <section id="contact" className="bg-[#0a192f] py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-[#ccd6f6] mb-6">Get In Touch</h2>
        <p className="text-gray-400 mb-8">I'm currently open to new opportunities and collaborations. Feel free to drop a message!</p>
        <form>
          <div className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="p-3 rounded bg-[#112240] border border-[#233554] text-white" />
            <input type="email" placeholder="Your Email" className="p-3 rounded bg-[#112240] border border-[#233554] text-white" />
            <textarea placeholder="Your Message" rows="4" className="p-3 rounded bg-[#112240] border border-[#233554] text-white"></textarea>
            <button disabled className="bg-[#64ffda] text-[#0a192f] py-2 px-6 rounded font-bold cursor-not-allowed">
              Submit (Design Only)
            </button>
          </div>
        </form>
      </div>
    </section>
  );
  
  export default Contact;