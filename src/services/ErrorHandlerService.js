class ErrorHandlerService {
    handleError(error) {
        console.error('An error occurred:', error);

        if (typeof revdebug !== 'undefined') {
            revdebug.exception(error);
        }
    }
}

export default new ErrorHandlerService();
