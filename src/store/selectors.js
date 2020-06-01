export const getStateUser = (state) => state.user;
export const getStateAds = (state) => state.ads;
// export const getState = () => initialState;

export const getLimit = () => 6;

export const saveUser = (username, registered) => {
  const user = {
    username: username,
    registered: registered,
  };
  return user;
};

export const createAdvert = ({
  name,
  number,
  description,
  type,
  photo,
  work,
  motor,
  lifestyle,
  mobile,
}) => {
  let f = [];
  f.push(work, motor, lifestyle, mobile);
  let tags = f.filter((tag) => tag.checked).map((tag) => tag.value);
  const ads = {
    tags: tags,
    name: name.value,
    price: parseInt(number.value, 10),
    description: description.value,
    type: type.value,
    photo: photo.value,
  };

  return ads;
};
