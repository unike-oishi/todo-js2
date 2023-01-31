import "./styles.css";

const onclickAdd = () => {
  //取得
  const inputText = document.getElementById("add-text").value;
  //初期化
  document.getElementById("add-text").value = "";
  createImcompleteList(inputText);
};

//未完了から削除する共通イベント
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストを作成する共通イベント
const createImcompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //li生成
  const li = document.createElement("li");
  li.innerText = text;
  //ulに追加
  document.getElementById("incomplete-list").appendChild(div);

  //完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //li生成
    const compli = completeButton.parentNode.firstChild;
    const backButton = document.createElement("button");
    //戻すボタンイベント
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const backTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(backTarget);
      const text = backTarget.firstElementChild.innerText;
      createImcompleteList(text);
    });
    //追加するDiv
    const compdiv = document.createElement("div");
    compdiv.className = "list-row";
    compdiv.appendChild(compli);
    compdiv.appendChild(backButton);

    //完了エリアに追加
    document.getElementById("complete-list").appendChild(compdiv);
    //削除
    deleteFromIncompleteList(completeButton.parentNode);
  });

  //削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //行生成
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

//追加ボタン
document
  .getElementById("add-button")
  .addEventListener("click", () => onclickAdd());
