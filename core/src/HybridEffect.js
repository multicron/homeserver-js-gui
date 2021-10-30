export class HybridEffect {

    run() {
        // Override this method with your hook's main code
    }

    cleanup(props) {
        // Override this method with your hook's cleanup code
    }

    hook() {
        return () => {
            this.run();
            return () => this.cleanup();
        }
    }

    dependencies() {
        return undefined;
    }
}

export default HybridEffect;
