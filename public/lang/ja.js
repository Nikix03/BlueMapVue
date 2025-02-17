export default {
    pageTitle: "BlueMap - {map}",
    menu: {
        title: "メニュー",
        tooltip: "メニューを表示"
    },
    maps: {
        title: "ワールド",
        button: "ワールド",
        tooltip: "ワールド一覧"
    },
    markers: {
        title: "マーカー",
        button: "マーカー",
        tooltip: "マーカー一覧",
        marker: "マーカー | マーカー",
        markerSet: "マーカーグループ | マーカーグループ",
        searchPlaceholder: "検索..."
    },
    settings: {
        title: "設定",
        button: "設定"
    },
    goFullscreen: {
        button: "フルスクリーン"
    },
    resetCamera: {
        button: "カメラ位置をリセット",
        tooltip: "カメラ位置をリセット"
    },
    updateMap: {
        button: "地形情報を更新",
        tooltip: "キャッシュを削除して最新情報に更新する"
    },
    lighting: {
        title: "明るさ",
        dayNightSwitch: {
            tooltip: "夜/朝を切り替え"
        },
        sunlight: "時間帯",
        ambientLight: "明るさ"
    },
    resolution: {
        title: "グラフィック品質",
        high: "最高設定！ (SSAA, x2)",
        normal: "描画優先 (Native, x1)",
        low: "処理優先 (Upscaling, x0.5)"
    },
    freeFlightControls: {
        title: "マウス設定",
        mouseSensitivity: "マウス感度",
        invertMouseY: "Y軸の反転"
    },
    renderDistance: {
        title: "描画距離",
        hiresLayer: "高品質の距離",
        lowersLayer: "低品質の距離"
    },
    theme: {
        title: "テーマ",
        default: "デフォルト (システム / ブラウザー の設定)",
        dark: "ダーク",
        light: "ライト"
    },
    debug: {
        button: "デバッグ情報の表示"
    },
    resetAllSettings: {
        button: "設定をリセット"
    },
    players: {
        title: "プレイヤー",
        tooltip: "プレイヤー一覧"
    },
    compass: {
        tooltip: "方角 / クリックで方角をリセット"
    },
    controls: {
        title: "視点",
        perspective: {
            button: "立体",
            tooltip: "立体表示"
        },
        flatView: {
            button: "平面",
            tooltip: "平面表示",
        },
        freeFlight: {
            button: "スペクテイター",
            tooltip: "スペクテイターモード"
        }
    },
    language: {
        title: "言語",
    },
    blockTooltip: {
        block: "ブロック",
        position: "座標",
        chunk: "チャンク",
        region: {
            region: "リージョン",
            file: "ファイル"
        },
        light: {
            light: "明るさ",
            sun: "太陽光",
            block: "光源"
        }
    },
    info: {
        title: "情報",
        button: "情報",
        content: `
<img src="assets/logo.png" style="display: block; width: 40%; margin: 3em auto; border-radius: 50%">
<p>
	<h2>マウス操作:</h2>
	<table>
		<tr><th>移動</th><td><kbd>左クリック</kbd> + ドラッグ</td></tr>
		<tr><th>ズーム</th><td><kbd>マウスホイール</kbd> (scroll)</td></tr>
		<tr><th>回転 / 傾き</th><td><kbd>右クリック</kbd> + ドラッグ</td></tr>
	</table>
</p>
<p>
	<h2>キーボード操作:</h2>
	<table>
		<tr><th>移動</th><td><kbd>wasd</kbd> / <kbd>矢印キー</kbd></td></tr>
		<tr><th>ズーム</th><td>Numpad: <kbd>+</kbd>/<kbd>-</kbd> or <kbd>Ins</kbd>/<kbd>Home</kbd></td></tr>
		<tr><th>回転 / 傾き</th><td><kbd>Left-Alt</kbd> + <kbd>wasd</kbd> / <kbd>arrow-keys</kbd> or <kbd>Delete</kbd>/<kbd>End</kbd>/<kbd>Page Up</kbd>/<kbd>Page Down</kbd></td></tr>
	</table>
</p>
<p>
	<h2>タッチ操作:</h2>
	<table>
		<tr><th>移動</th><td>一本指でドラッグ</td></tr>
		<tr><th>ズーム</th><td>ピンチ イン/アウト</td></tr>
		<tr><th>回転 / 傾き</th><td>二本指でドラッグ + 回転 / 昇降</td></tr>
	</table>
</p>
<br><hr>
<p>
	このマップは<a href="https://bluecolo.red/bluemap">BlueMap</a>で生成されています！&#9829;
</p>
		`
    }
}