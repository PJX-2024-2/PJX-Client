declare global {
  interface Window {
    Kakao: any;
  }
};

const shareKakao = () => {
  if(window.Kakao){
    const kakao = window.Kakao;
    if(!kakao.initialized) {
      kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
    }
    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '오늘의 디저트',
        description: '친구의 한달 지출 내역을 확인해보세요',
        imageUrl:
          '../assets/profileMockImage.png',
        link: {
          mobileWebUrl: 'https://pjx-client.vercel.app',
          webUrl: 'https://pjx-client.vercel.app',
        },
      },
      buttons: [
        {
          title: '친구의 지출 보러가기',
          link: {
            mobileWebUrl: 'https://pjx-client.vercel.app/home',
            webUrl: 'https://pjx-client.vercel.app/home',
          },
        },
      ],
    });
  }
}

export default shareKakao;