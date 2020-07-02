# 大阪市　保育施設等 空き情報マップ

- 大阪市では、スマートフォン等で活用していただくことを目的として、保育施設等の空き情報をウェブサイト上の地図情報を利用して提供しています。
- https://www.city.osaka.lg.jp/contents/wdu110/sukusuku/map.html
- 本ソースコードは大阪市ICT戦略室で開発いたしました。他の自治体でも同様の機能をホームページに設置いただけるように、ソースコードを公開することとしました。
- 設計方針として、データベースを使用せず、支援情報を記録したcsvファイルの更新のみで運用するシンプルなサイトとしています。
- HTML, JacaScript, CSSで構成し、WEBサーバーにファイルをアップロードするだけです。
- 利用しているライブラリは、「UIKit」「jQuery」「jquery-csv」です。

# 使い方
- アイコンやボタンの画像ファイルはsampleとしていますので、画像ファイルを用意してください。
- .html .jsファイル内の「サンプル市」を自治体名に修正してください。
- GoogleMapApiKeyを修正してください。
- liffIdを修正してください。（LIFFアプリケーションとして動作します）
- 「sukusukudata.csv」ファイルを修正してください。(以後、新情報を更新。ファイル名は変更しないでください。)
- 二次調整期間中は「sukusukudata1-2.csv」ファイルを修正してアップロードしてください。(以後、新情報を更新。ファイル名は変更しないでください。期間終了後、ファイルをサーバから削除してください。)
- 自治体ホームページのWEBサーバーの適切なフォルダに、v2.0.1フォルダ内のソースをアップロードするだけで、使用可能となります。(ビルド等は必要ありません)

# IssueへのコメントやPull Requestについて

- Issue、Pull Requestの対応はいたしかねますので、ご理解いただきますようお願いいたします。
- 貢献いただける方につきましては、他の自治体における設置等に貢献いただければと考えております。

# ライセンス
本ソフトウェアは、[MITライセンス](/LICENCE.txt)の元提供されています。