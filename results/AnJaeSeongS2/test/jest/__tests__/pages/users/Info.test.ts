// import axios, {AxiosResponse} from 'axios';
// import {LoginToken, User} from 'src/components/models';
// import {Store, useStore} from 'vuex';
// import Vue from 'vue';
// import InfoItem from 'src/pages/users/InfoItem.vue';
// import { mount } from '@vue/test-utils';
// import { StateInterface } from 'src/store';
import { mountFactory } from '@quasar/quasar-app-extension-testing-unit-jest';
import { QCard, QList } from 'quasar';
import Info from 'src/pages/users/Info.vue';

const factory = mountFactory(Info, {
  // mount: { type: 'full' } <= uncomment this line to use `mount`; `shallowMount` is used by default as it will stub all **registered** components found into the template
  quasar: { components: { QCard, QList } },
});

describe('Info', () => {
  // DUMMY test, you should remove this and add your own tests
  test('mounts without errors', () => {
    const wrapper = factory(); // <= when no props are needed
    // const wrapper = factory({ propName: propValue }); <= when props are needed
    expect(wrapper).toBeTruthy();

    console.log(" 지금 quasar v2 에서 quasar로 만든 vue 3.0 component에 대한 유닛 테스트인 jest를 사용할 수 없다. 아직 @quasar/testing 측에서 vue3.0에 맞는 jest 대응을 끝내지 못했다.");
    console.log(" 지금 quasar v2 에서 quasar로 만든 vue 3.0 component에 대한 유닛 테스트인 jest를 사용할 수 없다. 아직 @quasar/testing 측에서 vue3.0에 맞는 jest 대응을 끝내지 못했다.");
    console.log(" 지금 quasar v2 에서 quasar로 만든 vue 3.0 component에 대한 유닛 테스트인 jest를 사용할 수 없다. 아직 @quasar/testing 측에서 vue3.0에 맞는 jest 대응을 끝내지 못했다.");
    console.log(" 지금 quasar v2 에서 quasar로 만든 vue 3.0 component에 대한 유닛 테스트인 jest를 사용할 수 없다. 아직 @quasar/testing 측에서 vue3.0에 맞는 jest 대응을 끝내지 못했다.");
    console.log(" 지금 quasar v2 에서 quasar로 만든 vue 3.0 component에 대한 유닛 테스트인 jest를 사용할 수 없다. 아직 @quasar/testing 측에서 vue3.0에 맞는 jest 대응을 끝내지 못했다.");
    console.log(" 지금 quasar v2 에서 quasar로 만든 vue 3.0 component에 대한 유닛 테스트인 jest를 사용할 수 없다. 아직 @quasar/testing 측에서 vue3.0에 맞는 jest 대응을 끝내지 못했다.");
    console.log(" 지금 quasar v2 에서 quasar로 만든 vue 3.0 component에 대한 유닛 테스트인 jest를 사용할 수 없다. 아직 @quasar/testing 측에서 vue3.0에 맞는 jest 대응을 끝내지 못했다.");
    console.log(" 지금 quasar v2 에서 quasar로 만든 vue 3.0 component에 대한 유닛 테스트인 jest를 사용할 수 없다. 아직 @quasar/testing 측에서 vue3.0에 맞는 jest 대응을 끝내지 못했다.");
    console.log(" 지금 quasar v2 에서 quasar로 만든 vue 3.0 component에 대한 유닛 테스트인 jest를 사용할 수 없다. 아직 @quasar/testing 측에서 vue3.0에 맞는 jest 대응을 끝내지 못했다.");
    console.log(" 지금 quasar v2 에서 quasar로 만든 vue 3.0 component에 대한 유닛 테스트인 jest를 사용할 수 없다. 아직 @quasar/testing 측에서 vue3.0에 맞는 jest 대응을 끝내지 못했다.");
  });
});

// describe('UserInfo fetch and rendering', () => {
//   // const user: User = {
//   //   account: "test",
//   //   id: 10,
//   //   level: 10,
//   //   name: "test"
//   // }
//   // const resp: AxiosResponse<User> = {
//   //   config: {},
//   //   data: user,
//   //   headers: undefined,
//   //   status: 0,
//   //   statusText: "",
//   // }
//   // axios.get = jest.fn().mockResolvedValue(resp);
//
//   it('has a setup hook', () => {
//     expect(typeof Info.setup).toBe('function');
//   });
//   //
//   // it('after gen Info component, check User stored data', () => {
//   //   const wrapper = mount(Info);
//   //   const $store: Store<StateInterface> = useStore();
//   //   console.log($store.state.loginToken);
//   // });
// });

// test('render userInfo', () => {
//   const user: User = {
//     account: "test", id: 10, level: 10, name: "test"
//   };
//   const response: AxiosResponse<User> = {
//     config: {}, data: user, headers: undefined, status: 200, statusText: "ok"
//   }
//   const mockedAxios = axios as jest.Mocked<typeof axios>;
//   axios.get = jest.fn().mockResolvedValue({
//     data: {
//       account: "test",
//       id: 10,
//       level: 10,
//       name: "test",
//     }
//   })
//
//
// });
