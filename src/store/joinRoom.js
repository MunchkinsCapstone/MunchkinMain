const CREATE_ROOM = 'CREATE_ROOM';
const JOIN_ROOM = 'JOIN_ROOM';
const LEAVE_ROOM = 'LEAVE_ROOM';

const createRoom = room => {
  return {
    type: CREATE_ROOM,
    room
  };
};

// const joinRoom = user => {
//     return {
//         type: JOIN_ROOM,
//         room:

//     }
// }

const room = {
  users: [],
  status: 'open'
};
