export const getData = async (jsonData: string) => {
  try {
    const response = await fetch(`/datas/${jsonData}.json`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Api 데이터 불러오기 실패", error);
    throw error;
  }
};
