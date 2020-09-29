const importData = async (jsonArray, model) => {
  let data = JSON.parse(jsonArray);

  for (let item of data) {
    try {
      let newItem = await model.create(item);
      await newItem.save();
    } catch (err) {
      console.log(err);
    }
  }
};

exports.importData = importData;
