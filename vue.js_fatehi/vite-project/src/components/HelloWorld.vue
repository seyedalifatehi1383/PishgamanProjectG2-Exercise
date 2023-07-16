<!-- <script setup lang="ts">
import { UserInfo } from 'os';
import { onMounted, reactive } from 'vue';
// reactivity : it knows the type of the 

// let msg = ref("new string"); // const is better
// const msg = ref("new string"); // default value
// msg.value = "changed string";

// interface State {
//   msg: string,
//   user: {
//     name: string,
//     family: string,
//     age: number,
//   }
// }

type State = {
  msg: string,
  user: {
    name: string,
    family: string,
    age: number,
  },

  userTypes?: {UserType[];
}



const user = reactive({
  name: 'ali',
  family: ' fatehi'
}); // default value

// data binding
// bine connect script to 

const state = reactive<State>({
  msg: "default value",
  user: {
    name: 'seyed ali',
    family: 'fatehi',
    age: 10,
  },
});

const submit = () => {
  alert(JSON.stringify(state.user))
}

const validateAge = () => typeof state.user.age === 'number'

let userType: "admin" | "member" | undefined;
// userType = "m"; // error!

// not standard
const validate = ():boolean | "hasan" | "ali" => {
  if (!validateAge())
    return false;

  return "ali";
}

const fakeFetch = () => new Promise((resolve) => setTimeout(() => {
  resolve([{
    id: '0',
    title: 'admin',
  }, {
    id: 0,
    title: 'member'
  }])
}, 10000))

setTimeout(() => {
  console.log("hello from setTimeout");
}, 3000)
console.log("first hello");

const loadUserTypes = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch("getListOfUserTypes");
  return await response.json() as UserType[];
  console.log('after await');
}
const loadUserTypes2 = () => {
  return new Promise<UserType[]> ((resolve, reject) => {
    fakeFetch("get ListOfUserTypes").then((userTypes) => {
    state.response = response.json((userTypeList) => {
      });
    }); 
  })
}

onMounted(async () => {
  console.log('after load user types');
//   loadUserTypes().then ((result) => {
    // console.log('load user types then' + result);
//   })
  // dont need async

  const result = await loadUserTypes();  
  console.log('after load user types');
  console.log(result);

  const result2 = await loadUserTypes2().then((result) => {

  });
  
})
</script>

<template>
<div>
  <div> name : {{ state.user.name }} {{ userType }} </div>
</div>

  {{ state.user }}
  <!-- two way binding -->
  <!-- <br />
  <input type="text" :value="state.user.name" />
  <input type="text" v-model="state.user.name" />
  <div v-if="!state.user.name"> لطفا نام را وارد کنید: </div>
  <input type="text" v-model="state.user.family" />
  <input type="number" v-model="state.user.age" />
  <select>
    <option v-for="opt in userTypes"> {{  }} </option>
  </select>
  <!-- {{ !!state.user.age }} casting the value to boolean -->
  <!-- <div v-if="!state.user.age && state.user.age !== 0"> سن خود را وارد کنید </div> -->
  <!-- <div v-if="!validateAge()"> سن خود را وارد کنید </div>
  <button @click="submit"> Submit </button>
</template> --> -->

<!-- v- model : directive that its work is two way binding -->

<!-- <style scoped>

</style> --> -->

<script setup lang="ts">
import { onMounted, reactive } from 'vue'

type UserType = { title: 'admin' | 'member'; id: number }

type State = {
  msg: string
  user: {
    name?: string
    family?: string
    age?: number
  }
  userTypes?: UserType[]
}

const state = reactive<State>({
  msg: 'default value',
  user: {}
})

const submit = () => {
  alert (JSON.stringify(state.user))
}
const validateAge = (): boolean => typeof state.user.age === 'number'

const validate = (): boolean | 'admin' | 'member' => {
  if (!validateAge()) return false
  return 'member'
}

const fakeFetch = () =>
  new Promise<UserType[]>((resolve) =>
    setTimeout(() => {
      resolve([
        {
          id: 0,
          title: 'admin'
        },
        {
          id: 0,
          title: 'member'
        }
      ])
    }, 10000)
  )

const loadUserTypes = async () => {
  return await fakeFetch()
}

const loadUserTypes2 = () => {
  return new Promise<UserType[]>((resolve, reject) => {
    fakeFetch().then((userTypes) => {
      state.userTypes = userTypes;
      resolve(userTypes)
    })
  })
}


onMounted(async () => {
  console.log('before load user types ')
  const result = await loadUserTypes()
  console.log('after load user types ', result)

  loadUserTypes2();
})
</script>

<template>
  <div>
    <div>نام:‌{{ state.user.name }} {{ state.userTypes }}</div>
  </div>

  <br />
  <input :value="state.user.name" />
  <input id="name" v-model="state.user.name" />
  <div v-if="!state.user.name">لطفا نام را وارد کنید.</div>
  <input v-model="state.user.family" />
  <input type="number" v-model="state.user.age" />
  <select>
    <option v-for="opt in userTypes">{{ opt.title }}</option>
  </select>
  <div v-if="validateAge()">سن خود را وارد کنید.</div>
  <button @click="submit">Submit</button>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

