export default function Home() {
  return (
    <div className="flex flex-col items-center text-center mt-10">
      <img
        src="Me.JPG"
        alt="profile"
        className="w-36 h-36 rounded-full shadow-lg mb-4 border-4 border-purple-400"
      />
      <h1 className="text-4xl font-bold text-purple-600 mb-2">
        Loetsakul Paovisit
      </h1>
      <p className="text-lg text-gray-700 max-w-lg">
        👋 สวัสดีครับ ผมชื่อ <strong>ฟอร์ด</strong><br />
        นี่คือโปรไฟล์ของผมและสิ่งที่ผมอยากให้รู้จัก
        
      </p>
    </div>
  );
}
