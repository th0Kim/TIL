1. _playground 는 놀이터라는 뜻으로
    프로젝트에서 실험적인 테스트 등에 사용할 때 사용되어진다.
2. css의 컴파일 저장소 경로는 setting.json에 '~/../css'로 하면 해당 scss상위 폴더 안에 css폴더 생성 후 그 안에 컴파일된 css파일이 저장된다.
{
    "liveSassCompile.settings.formats":[
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "~/../css"
        }
    ]
}
