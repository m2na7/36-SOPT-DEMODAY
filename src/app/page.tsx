export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h1 className="head1_sb_26 mb-6 text-black">폰트 스타일 시스템</h1>

          {/* 헤드라인 스타일 */}
          <div className="mb-8">
            <h3 className="title2_sb_16 mb-4 text-gray-800">헤드라인 스타일</h3>
            <div className="space-y-3">
              <div className="head1_sb_26 text-black">
                head1_sb_26 - 헤드라인 1
              </div>
              <div className="head2_sb_22 text-black">
                head2_sb_22 - 헤드라인 2
              </div>
            </div>
          </div>

          {/* 타이틀 스타일 */}
          <div className="mb-8">
            <h3 className="title2_sb_16 mb-4 text-gray-800">타이틀 스타일</h3>
            <div className="space-y-3">
              <div className="title1_sb_18 text-black">
                title1_sb_18 - 타이틀 1
              </div>
              <div className="title2_sb_16 text-black">
                title2_sb_16 - 타이틀 2
              </div>
              <div className="title3_m_14 text-black">
                title3_m_14 - 타이틀 3
              </div>
            </div>
          </div>

          {/* 바디 스타일 */}
          <div className="mb-8">
            <h3 className="title2_sb_16 mb-4 text-gray-800">바디 스타일</h3>
            <div className="space-y-3">
              <div className="body1_m_14 text-black">
                body1_m_14 - 이것은 바디 1 스타일입니다. Medium 폰트 웨이트와
                110% 라인 하이트를 가지고 있습니다.
              </div>
              <div className="body2_r_14 text-black">
                body2_r_14 - 이것은 바디 2 스타일입니다. Regular 폰트 웨이트와
                150% 라인 하이트를 가지고 있어 더 넓은 줄 간격을 제공합니다.
              </div>
              <div className="body3_r_12 text-black">
                body3_r_12 - 이것은 바디 3 스타일입니다. Regular 폰트 웨이트와
                140% 라인 하이트를 가지고 있습니다.
              </div>
              <div className="body4_r_11 text-black">
                body4_r_11 - 이것은 바디 4 스타일입니다. Regular 폰트 웨이트와
                110% 라인 하이트를 가지고 있습니다.
              </div>
            </div>
          </div>

          {/* 캡션 스타일 */}
          <div className="mb-8">
            <h3 className="title2_sb_16 mb-4 text-gray-800">캡션 스타일</h3>
            <div className="space-y-3">
              <div className="caption1_m_11 text-gray-600">
                caption1_m_11 - 캡션 1 (Medium)
              </div>
              <div className="caption1_l_11 text-gray-600">
                caption1_l_11 - 캡션 1 (Light)
              </div>
            </div>
          </div>

          {/* 실제 사용 예시 */}
          <div className="border-t pt-8">
            <h3 className="title2_sb_16 mb-4 text-gray-800">실제 사용 예시</h3>
            <div className="rounded-lg bg-gray-50 p-6">
              <h2 className="head2_sb_22 mb-2 text-black">
                블로그 포스트 제목
              </h2>
              <p className="caption1_m_11 mb-4 text-gray-500">
                2024년 1월 15일 • 5분 읽기
              </p>
              <p className="body2_r_14 mb-4 text-gray-700">
                이것은 실제 블로그 포스트의 본문입니다. body2_r_14 스타일을
                사용하여 읽기 편한 텍스트를 제공합니다. 150% 라인 하이트로 인해
                가독성이 향상됩니다.
              </p>
              <p className="body3_r_12 text-gray-600">
                body3_r_12 스타일로 작성된 부가 정보나 세부 내용입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 폰트 웨이트 비교 */}
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h2 className="title1_sb_18 mb-6 text-black">폰트 웨이트 비교</h2>
          <div className="space-y-2">
            <div className="caption1_l_11 text-gray-700">
              Light (300) - caption1_l_11
            </div>
            <div className="body4_r_11 text-gray-700">
              Regular (400) - body4_r_11
            </div>
            <div className="caption1_m_11 text-gray-700">
              Medium (500) - caption1_m_11
            </div>
            <div className="title2_sb_16 text-gray-700">
              SemiBold (600) - title2_sb_16
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
