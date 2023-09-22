const DangerAlert = (alertMessage, open) => {
  return `
    <div
        class="fixed bottom-2 mb-3 w-[100%] sm:w-[50%] lg:w-[25%] items-center rounded-lg bg-danger-100 px-6 py-5 text-base text-danger-700 ${
          !open ? "hidden" : "inline-flex"
        }
        role="alert"
    >
        <span class="mr-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-5 w-5"
            >
                <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                    clip-rule="evenodd"
                />
            </svg>
        </span>
        ${alertMessage || "Something went wrong!"}
    </div>
  `;
};

export default DangerAlert;
