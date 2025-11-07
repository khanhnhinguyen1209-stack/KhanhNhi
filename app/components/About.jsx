import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Giới thiệu về tôi</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full max-w-md mx-auto">
            <Image 
              src="/img/about.jpg" 
              alt="About me" 
              width={400} 
              height={500}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="fade-in-up">
            <p className="text-gray-600 mb-6 leading-relaxed">
              Trong 4 năm học đại học, tôi đã tham gia nhiều hoạt động nghiên cứu và tình nguyện, 
              góp phần tích lũy kiến thức và kỹ năng thực tiễn. Tôi luôn tin rằng công nghệ là chìa 
              khóa thay đổi thế giới, và mong muốn đóng góp vào việc tạo ra những sản phẩm mang ý nghĩa, 
              mang lại giá trị cho cộng đồng.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Với tinh thần học hỏi và sáng tạo, tôi không ngừng trau dồi bản thân qua các dự án học thuật 
              và hoạt động xã hội — từ phân tích dữ liệu, lập trình đến nghiên cứu trong lĩnh vực bán dẫn và công nghệ 
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">3+</div>
                <div className="text-gray-600">Ngày tình nguyện</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600">20+</div>
                <div className="text-gray-600">Dự án hoàn thành</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}