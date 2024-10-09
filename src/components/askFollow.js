const FloatingTextarea = () => {
    const styles = {
      container: {
        position: 'fixed',
        bottom: '36px',
        left: '400px',
        right: '16px',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        height: '10%',
      },
      wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        height: '60px',
        padding: '16px 8px',
        background: '#202222',
        border: '2px solid #e8e8e623',
        borderRadius: '45px',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
      textareaContainer: {
        display: ' flex',
        alignItems: 'center',
        flexGrow: 1,
        flexShrink: 1,
        order: 1,
        overflow: 'hidden',
        // eslint-disable-next-line
        display: 'flex',
        position: 'relative',
        width: '80%',
        height: '70px',
        border: '2px solid #e8e8e623',
        borderRadius: '40px',
        padding: '0 0 0 40px'
      },
      textarea: {
        display: ' flex',
        alignItems: 'center',
        width: '100%',
        height: '50%',
        maxHeight: '45vh',
        padding: '50px auto',
        outline: 'none',
        border: 'none',
        resize: 'none',
        overflow: 'auto',
        background: '#202222',
        fontSize: '25px',
      },
      buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px 0 80px',
        order: 2,
        width: '300px',
      },
      toggleContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        marginRight: '8px',
      },
      toggleButton: {
        width: '40px',
        height: '24px',
        padding: '2px',
        background: 'transparent',
        border: '1px solid #8d9191',
        borderRadius: '9999px',
        cursor: 'pointer',
      },
      toggleCircle: {
        width: '18px',
        height: '18px',
        background: '#8d9191',
        borderRadius: '50%',
      },
      toggleLabel: {
        marginLeft: '4px',
        fontSize: '14px',
        color: '#8d9191',
        // eslint-disable-next-line
        fontSize: '25px'
      },
      submitButton: {
        width: '36px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#2f302f',
        color: '#718096',
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
      },
    };
  
    return (
      <div style={styles.container}>
        <div style={styles.wrapper}>
          <div style={styles.textareaContainer}>
            <textarea
              placeholder="Ask follow-up"
              style={styles.textarea}
            ></textarea>
            <div style={styles.buttonContainer}>
                <span style={styles.toggleContainer}>
                <button
                    style={styles.toggleButton}
                    type="button"
                    role="switch"
                    aria-checked="false"
                    aria-label="Enable Pro Search"
                >
                    <div style={styles.toggleCircle}></div>
                </button>
                <label style={styles.toggleLabel}>Pro</label>
                </span>
                <button
                style={styles.submitButton}
                aria-label="Submit"
                type="button"
                >
                {/* ➤ */}
                <svg style= {{width: 20,height: 20}} aria-hidden="true" focusable="false" data-prefix="far" data-icon="code-fork" class="svg-inline--fa fa-code-fork fa-fw fa-1x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M80 112a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm80-32c0 35.8-23.5 66.1-56 76.3V192c0 22.1 17.9 40 40 40H304c22.1 0 40-17.9 40-40V156.3c-32.5-10.2-56-40.5-56-76.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 35.8-23.5 66.1-56 76.3V192c0 48.6-39.4 88-88 88H248v75.7c32.5 10.2 56 40.5 56 76.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-35.8 23.5-66.1 56-76.3V280H144c-48.6 0-88-39.4-88-88V156.3C23.5 146.1 0 115.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM256 432a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
            </button>
          </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FloatingTextarea;