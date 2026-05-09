import { useState } from 'react';

export default function DemoForm() {

  const [formData, setFormData] = useState({
    studentName: '',
    board: '',
    studentClass: '',
    classType: '',
    subject: '',
    demoTiming: '',
    regularTiming: '',
    numberOfHours: '',
    numberOfDays: '',
    specialRequirements: '',
    phoneNumber: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = () => {

    const message = `
🎓 *NEW FREE DEMO REQUEST*

👨‍🎓 *Student Name:* ${formData.studentName}

🏫 *Board:* ${formData.board}

📚 *Class:* ${formData.studentClass}

💻 *Class Type:* ${formData.classType}

📖 *Subject:* ${formData.subject}

⏰ *Demo Timing:* ${formData.demoTiming}

🕒 *Regular Timing:* ${formData.regularTiming}

⌛ *Number Of Hours:* ${formData.numberOfHours}

📅 *Number Of Days:* ${formData.numberOfDays}

⭐ *Special Requirements:* ${formData.specialRequirements}

📞 *Phone Number:* ${formData.phoneNumber}

━━━━━━━━━━━━━━━
Thank You
Mi Tutora Home Tuition
`;

    const whatsappURL =
      `https://wa.me/917483034168?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
  };

  return (

    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">

      <h2 className="text-4xl font-bold text-center text-slate-900 mb-10">
        Book Free Demo
      </h2>

      <div className="space-y-5">

        <input
          type="text"
          name="studentName"
          placeholder="Student Name"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#00a992]"
        />

        <input
          type="text"
          name="board"
          placeholder="Board"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#00a992]"
        />

        <input
          type="text"
          name="studentClass"
          placeholder="Class"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#00a992]"
        />

        <input
          type="text"
          name="classType"
          placeholder="Class Type (Online / Offline)"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#00a992]"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#00a992]"
        />

        <input
          type="text"
          name="demoTiming"
          placeholder="Demo Timing"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#00a992]"
        />

        <input
          type="text"
          name="regularTiming"
          placeholder="Regular Timing"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#00a992]"
        />

        <input
          type="text"
          name="numberOfHours"
          placeholder="Number Of Hours"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#00a992]"
        />

        <input
          type="text"
          name="numberOfDays"
          placeholder="Number Of Days"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#00a992]"
        />

        <textarea
          name="specialRequirements"
          placeholder="Special Requirements"
          rows={4}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#00a992]"
        />

        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#00a992]"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-[#00a992] hover:bg-[#008f7d] transition-all text-white py-4 rounded-xl text-lg font-semibold shadow-lg"
        >
          Submit & Open WhatsApp
        </button>

      </div>
    </div>
  );
}