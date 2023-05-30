interface IProcess {
    client: boolean
}

declare global {
    var process: IProcess
}

export {};
