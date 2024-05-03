import { compose } from 'redux';

interface KakaoAuthSettings {
  success: (response: KakaoAuthResponse) => void;
  fail: (error: KakaoAuthError) => void;
  redirectUri: string;
  prompt?: string;
  // 필요하다면 여기에 추가 설정을 선언할 수 있습니다.
}

declare global {
  // __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 속성을 전역 WINDOW 전역 확장자로 등록
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    opera?: any; // opera 속성이 있을 수도 있고 없을 수도 있으므로 optional로 선언

    gapi: {
      load: (lib: string, callback: () => void) => void;
      auth2: {
        init: (params: any) => Promise<any>;
        getAuthInstance: () => any; // 여기에 더 정확한 타입을 제공할 수 있습니다.
        // 여기에 gapi의 다른 속성이나 메서드들을 추가할 수 있습니다.
      };
      // 여기에 Google API의 다른 라이브러리들을 추가할 수 있습니다.
    };
    Kakao: {
      init: (apiKey: string) => void;
      isInitialized: () => boolean;
      Auth: {
        authorize: (settings: KakaoAuthSettings) => void;
        setAccessToken: (string) => void;
      };
      // 여기에 Kakao JavaScript SDK의 다른 메서드들을 추가할 수 있습니다.
    };
    naver: {
      LoginWithNaverId: (params: any) => void;
      // 여기에 Naver JavaScript SDK의 다른 메서드들을 추가할 수 있습니다.
    };
  }
}
