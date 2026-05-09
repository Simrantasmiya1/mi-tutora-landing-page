import { useState } from 'react';

export default function TeacherForm() {

  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    phoneNumber: '',
    whatsappNumber: '',
    email: '',
    address: '',
    qualification: '',
    experience: '',
    occupation: '',
    subjects: '',
    classes: '',
    board: '',
    teachingMode: '',
    teachingApproach: '',
    currentStudents: '',
    schoolNames: '',
    preferredLocations: '',
    travelDistance: '',
    expectedFees: '',
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
🎓 *NEW TUTOR APPLICATION*

👨‍🏫 *Full Name:* ${formData.fullName}

⚧ *Gender:* ${formData.gender}

📞 *Phone Number:* ${formData.phoneNumber}

💬 *WhatsApp Number:* ${formData.whatsappNumber}

📧 *Email:* ${formData.email}

🏠 *Residential Address:* ${formData.address}

🎓 *Highest Qualification:* ${formData.qualification}

📚 *Teaching Experience:* ${formData.experience}

💼 *Current Occupation:* ${formData.occupation}

📖 *Subjects You Teach:* ${formData.subjects}

🏫 *Classes You Teach:* ${formData.classes}

📋 *Preferred Teaching Board:* ${formData.board}

💻 *Teaching Mode:* ${formData.teachingMode}

🧠 *Teaching Approach:* ${formData.teachingApproach}

👨‍🎓 *Current Students:* ${formData.currentStudents}

🏫 *School Names:* ${formData.schoolNames}

📍 *Preferred Locations:* ${formData.preferredLocations}

🚗 *Travel Distance:* ${formData.travelDistance}

💰 *Expected Monthly Fee:* ${formData.expectedFees}

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
        Teacher Information Form
      </h2>

      <div className="space-y-5">

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4"
        />

        <input
          type="text"
          name="gender"
          placeholder="Gender"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4"
        />

        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4"
        />

        <input
          type="text"
          name="whatsappNumber"
          placeholder="WhatsApp Number"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4"
        />

        <input
          type="email"
          name="email"
          placeholder="Email ID"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4"
        />

        <textarea
          name="address"
          placeholder="Residential Address"
          rows={3}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4"
        />

        <input
          type="text"
          name="qualification"
          placeholder="Highest Qualification"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4"
        />

        <input
          type="text"
          name="experience"
          placeholder="Total Teaching Experience (Years)"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4"
        />

        <input
          type="text"
          name="occupation"
          placeholder="Current Occupation"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4"
        />

        <input
          type="text"
          name="subjects"
          placeholder="Subjects You Teach"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4"
        />

        <input
          type="text"
          name="classes"
          placeholder="Classes You Teach"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4"
        />

        <input
          type="text"
          name="board"
          placeholder="Preferred Teaching Board"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4"
        />

        <input
          type="text"
          name="teachingMode"
          placeholder="Teaching Mode (Online / Offline / Both)"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4"
        />

        <textarea
          name="teachingApproach"
          placeholder="Brief Description of Your Teaching Approach"
          rows={3}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4"
        />

        <input
          type="text"
          name="currentStudents"
          placeholder="How many students are you currently teaching?"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4"
        />

        <input
          type="text"
          name="schoolNames"
          placeholder="Mention School Names of Current Students"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4"
        />

        <input
          type="text"
          name="preferredLocations"
          placeholder="Preferred Locations"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4"
        />

        <input
          type="text"
          name="travelDistance"
          placeholder="Willing To Travel Within KM"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4"
        />

        <input
          type="text"
          name="expectedFees"
          placeholder="Expected Monthly Fee Range"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4"
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