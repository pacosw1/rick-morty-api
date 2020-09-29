const importData = async (jsonArray, model) => {
  console.log("Importing data");
  let data = JSON.parse(jsonArray);

  console.log(data.length);
  for (let item of data) {
    try {
      let newItem = await model.create(item);
      await newItem.save();
    } catch (err) {
      console.log(err);
    }
  }
  console.log(`Saved ${data.length} documents`);
  console.log(model);
};

exports.importData = importData;
