---
marp: true
theme: custom
class: lead
paginate: true
---

<!---
_class: title
--->

> # お前は今まで読んだドキュメントの数を覚えているのか？RAG構築で究極生命体になろう！
>

<br>
<br>
2/16(日)ぼく・わたしのエンジニアとしての生成AI活用勉強会

<br>
<br>
<br>
西田 宗太郎

---

<!-- _header: 事前準備 -->
こちらをチェックアウトして、README.mdに従って準備をしてください
https://github.com/ninomae/rag-handson

![bg right:33% height:300](./images/QR_166699.png)
<!-- footer: Footer -->

---

<!-- _header: 自己紹介 -->
- 名前: 西田宗太郎
- 出身: 福岡
- 好きな食べ物: ラーメン、鮨、焼肉
- 職業: エンジニア
- 趣味: 開発とゲーム
- 好きな言語: C#、TypeScript
![bg right:50% height:70%](./images/profile.jpg)

---

<!-- _header: RAGとは -->
Retrieval-Augmented Generation（以下 RAG）とは、大規模言語モデル（LLM）の生成能力と、外部の情報を取り込むための**検索（リトリーバル）**を組み合わせた手法のことです。

<!-- footer: Footer -->
![height:400](./images/RAG_diagram.png)
[出典:wikipedia](https://en.wikipedia.org/wiki/Retrieval-augmented_generation)

---

<!-- _header: 本日の技術スタック紹介 -->
![height:100](./images/open-ai.png)
<br>
![height:100](./images/logo_with_text.png)

---

<!-- _header: コレクションを作成してみよう -->
```bash
pnpm vector:create
```
上記コマンドを実行して、下記を見てみましょう
http://localhost:6333/dashboard#/collections

---

<!-- _header: コレクションにデータを投入してみよう -->
```bash
pnpm vector:upsert
```
上記コマンドを実行して、下記を見てみましょう
http://localhost:6333/dashboard#/collections


---

<!-- _header: コレクションにデータを投入してみよう -->
1. **Bold bold bold bold bold**
2. *Italic italic italic italic italic*
3. Mathematical formula
$$
\int^2_0 (x+1)dx=\left[\frac{1}{2}x^2+x\right]^2_0=4
$$ 
4. Code
```c
#include <stdio.h>
int main() {
   printf("Hello, World!");
   return 0;
}
```

---

<!-- _header: 問い合わせをしてみよう -->
1. **Bold bold bold bold bold**
2. *Italic italic italic italic italic*
3. Mathematical formula
$$
\int^2_0 (x+1)dx=\left[\frac{1}{2}x^2+x\right]^2_0=4
$$ 
4. Code
```c
#include <stdio.h>
int main() {
   printf("Hello, World!");
   return 0;
}
```

---

<!-- _header: 問い合わせをしてみよう -->
1. **Bold bold bold bold bold**
2. *Italic italic italic italic italic*
3. Mathematical formula
$$
\int^2_0 (x+1)dx=\left[\frac{1}{2}x^2+x\right]^2_0=4
$$ 
4. Code
```c
#include <stdio.h>
int main() {
   printf("Hello, World!");
   return 0;
}
```

---

<!-- _header: 処理の流れを見てみよう -->
1. **Bold bold bold bold bold**
2. *Italic italic italic italic italic*
3. Mathematical formula
$$
\int^2_0 (x+1)dx=\left[\frac{1}{2}x^2+x\right]^2_0=4
$$ 
4. Code
```c
#include <stdio.h>
int main() {
   printf("Hello, World!");
   return 0;
}
```

---

<!---
_class: title
--->

# ※ハンズオンは以上ですお疲れ様でした︕


