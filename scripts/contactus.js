function confirmSubmit() {
    if (confirm("Are you sure you want to submit this form?")) {
        window.location.reload();
    }
    return false;
}