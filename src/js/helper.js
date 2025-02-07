export const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    // const res = await fetch(`${API_URL}/${id}`);

    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} ${data.status}`);

    return data;
  } catch (err) {
    console.log(err);
  }
};
