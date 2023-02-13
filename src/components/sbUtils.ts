export class SbArgTypes {
    private getInstanceKeyList() {
        return Object.keys(this)
    }

    // sb 컨트롤을 위한 parameter 객체 생성
    private getInstanceParameterList() {
        const result: any[] = []

        this.getInstanceKeyList().forEach((item) => {
            // TODO: any 제거방법 찾기..
            const _this = this as { [key: string]: any }

            const option = {
                [item]: {
                    control: (typeof _this[item]).toString(),
                    defaultValue: _this[item],
                },
            }
            result.push(option)
        })
        return result
    }

    setArgTypes(argTypes: { [key: string]: unknown }) {
        this.getInstanceParameterList().forEach((item) => {
            argTypes[Object.entries(item)[0][0]] = Object.entries(item)[0][1]
        })
    }

    setParameter(parameter: { [key: string]: any }) {
        parameter.controls.include = [
            ...parameter.controls.include,
            ...this.getInstanceKeyList(),
        ]
    }

    removeSbArgTypesToProps<T extends { [key: string]: any }>(props: T): T {
        const result = { ...props }

        this.getInstanceKeyList().forEach((key: string) => {
            delete result[key]
        })
        return result
    }
}
