function CreateSource() {
    return (
        <div className='CreateSource'>
            <form class="searchform">
                <label for="sname">Source Name:</label>
                <input type="text" id="sname" name="sname" />
                <label for="semail">Source Email:</label>
                <input type="text" id="semail" name="semail" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreateSource;