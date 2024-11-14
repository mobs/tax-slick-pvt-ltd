import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { RxCross1 } from 'react-icons/rx'

export default function ModalComponent({modalText, setOpenModal, openModal, brochure, payment_plan, floor_plan}) {
  function closeModal() {
    setOpenModal(false)
  }

  return (
    <>
      <Transition appear show={openModal} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="mt-20 w-full max-w-md transform overflow-hidden rounded-2xl bg-background text-left align-middle shadow-xl transition-all">
                <button className='md:ml[23rem] absolute right-0' onClick={closeModal}> <RxCross1 className='text-3xl mr-0 bg-heading text-gradient rounded-full p-2 font-bold'/> </button>
                  {/* <FormNew setOpenModal={setOpenModal} brochure={brochure} payment_plan={payment_plan} floor_plan={floor_plan} /> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
